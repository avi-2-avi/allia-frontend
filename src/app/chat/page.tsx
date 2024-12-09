import Link from 'next/link';

const ChatPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
      <div className="max-w-md w-full p-6 bg-white rounded-3xl shadow-xl transform transition-all hover:scale-105">
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Imagen de perfil"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">Bienvenido al Chat</h1>
          <p className="text-lg text-gray-600 mb-6">
            Únete a nuestra plataforma para comenzar una conversación instantánea y fluida.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/chat/[id]" as="/chat/1">
            <div className="px-6 py-3 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300">
              Iniciar Chat
            </div>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
