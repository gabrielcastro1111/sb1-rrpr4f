"use client";

import { useState } from 'react';
import { useChat } from 'ai/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ChatWindow() {
  const [language, setLanguage] = useState('en');
  const { toast } = useToast();
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat',
    body: { language },
    onError: (error) => {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "The AI service is temporarily unavailable. Please try again later.",
        variant: "destructive",
      });
    },
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col h-[600px]">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">AI Nutritionist</h2>
          <p className="text-sm text-gray-500">Ask me anything about nutrition and health!</p>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 mt-4">
                Start a conversation by asking a question about nutrition or health!
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'assistant'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {message.role === 'assistant' ? (
                    <Bot className="h-5 w-5" />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 max-w-[80%] whitespace-pre-wrap ${
                    message.role === 'assistant'
                      ? 'bg-muted'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center justify-center py-2">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            )}
          </div>
        </ScrollArea>

        <form
          onSubmit={handleSubmit}
          className="p-4 border-t flex gap-2"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about nutrition, diets, or health..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </div>
    </Card>
  );
}