# Use the official lightweight Python image.
# https://hub.docker.com/_/python
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Upgrade pip
RUN pip install --upgrade pip

# Install anthropic directly to ensure it's available
RUN pip install anthropic

# Copy the dependencies file to the working directory
COPY api/requirements.txt ./

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY api/ .

# Specify the command to run on container start
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8080", "main:app"] 