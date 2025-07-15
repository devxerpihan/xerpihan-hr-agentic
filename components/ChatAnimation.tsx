'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
}

const initialMessages: Omit<Message, 'id'>[] = [
  {
    sender: 'user',
    text: 'I need to hire my first employee in Germany. What do I need to do?',
  },
  {
    sender: 'ai',
    text: 'Of course. For a first hire in Germany, you need a compliant employment contract, to register for social security, and set up payroll. I can generate a checklist and a compliant contract template for you.',
  },
  {
    sender: 'user',
    text: 'Great, please generate the checklist.',
  },
  {
    sender: 'ai',
    text: 'Here is your new hire checklist for Germany. It includes all necessary steps, from registration to onboarding.',
  },
];

const ChatAnimation = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const messageData = initialMessages.map((msg, i) => ({ ...msg, id: i }));
    let index = 0;

    const interval = setInterval(() => {
      if (index < messageData.length) {
        setMessages((prev) => [...prev, messageData[index]]);
        index++;
      } else {
        setMessages([]);
        index = 0;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg mx-auto">
      <div className="flex items-center mb-4">
        <Bot className="w-8 h-8 text-primary-400 mr-3" />
        <h3 className="text-lg font-semibold text-white">Hairpin AI Assistant</h3>
      </div>
      <div className="h-80 overflow-y-auto pr-4 space-y-4">
        <AnimatePresence>
          {messages.map((msg) => (
            msg && (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}
              >
                {msg.sender === 'ai' && <Bot className="w-6 h-6 text-primary-400 flex-shrink-0" />}
                <div
                  className={`rounded-lg px-4 py-2 max-w-xs ${
                    msg.sender === 'ai'
                      ? 'bg-gray-700 text-white'
                      : 'bg-primary-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && <User className="w-6 h-6 text-gray-400 flex-shrink-0" />}
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Ask Hairpin AI..."
          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button className="ml-3 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatAnimation; 