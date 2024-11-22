import { ChatWindow } from "@/components/chat/chat-window";

export default function ChatPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">AI Nutritionist Chat</h1>
            <p className="text-lg text-gray-600">
              Get personalized nutrition advice from our AI expert
            </p>
          </div>
          
          <ChatWindow />
        </div>
      </div>
    </main>
  );
}