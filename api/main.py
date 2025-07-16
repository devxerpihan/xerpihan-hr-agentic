import io
import os
from contextlib import redirect_stdout
from flask import Flask, jsonify, request
from strands import Agent
from strands.models.anthropic import AnthropicModel
from google.cloud import secretmanager

def access_secret_version(secret_id, version_id="latest"):
    """
    Access the payload for the given secret version and return it.
    """
    client = secretmanager.SecretManagerServiceClient()
    project_id = os.environ.get("GCP_PROJECT")
    name = f"projects/{project_id}/secrets/{secret_id}/versions/{version_id}"
    response = client.access_secret_version(name=name)
    return response.payload.data.decode("UTF-8")

# Fetch the API key from Secret Manager and set it as an environment variable
# This must be done before the AnthropicModel is initialized
try:
    api_key = access_secret_version("anthropic-api-key")
    os.environ["ANTHROPIC_API_KEY"] = api_key
except Exception as e:
    # In a production environment, you would want to handle this error more gracefully
    print(f"Error accessing secret: {e}")
    # For local development, you might fall back to a .env file or other method
    # For this example, we'll let it fail if the secret isn't available.
    pass


app = Flask(__name__)

# Define a system prompt for the HR agent
HR_SYSTEM_PROMPT = """
You are an expert HR assistant. You can help with a variety of HR-related tasks,
including answering questions about company policies, providing information about benefits,
and assisting with onboarding and offboarding processes.
"""

# Initialize the Strands agent with the Anthropic model
# The API key will be read from the ANTHROPIC_API_KEY environment variable
hr_agent = Agent(
    model=AnthropicModel(
        model_id="claude-3-haiku-20240307",
        max_tokens=1024,
    ),
    system_prompt=HR_SYSTEM_PROMPT,
    tools=[] # We will add tools later
)

@app.route('/')
def hello_world():
    return jsonify({'message': 'Hello, World! The HR Agent is running.'})

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message')

    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    # Capture the stdout from the agent call
    f = io.StringIO()
    with redirect_stdout(f):
        hr_agent(user_message)
    agent_response = f.getvalue()

    return jsonify({'response': agent_response})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True) 