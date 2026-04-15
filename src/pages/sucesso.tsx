import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-card border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
        <div className="h-20 w-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Pagamento confirmado!</h1>
        <p className="text-gray-400 text-lg mb-8">
          Seu projeto já está em andamento. Em breve nossa equipe entrará em contato.
        </p>
        <Link 
          href="/"
          className="inline-block w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(120,96,255,0.3)]"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
