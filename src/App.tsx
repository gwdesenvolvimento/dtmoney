import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransacationModalOpen, setIsNewTransacationModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransacationModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransacationModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransacationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle/>
    </TransactionsProvider>
  );
}