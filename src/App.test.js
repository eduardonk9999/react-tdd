import React from 'react'
import App from './App'
import { render, screen } from "@testing-library/react"
describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', () => {
    it('o nome é exibido', () => {
      render(<App />);
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    })
    it('o saldo é exibido', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument()
    })
    it('o btn realizar transacao é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument()
    })
  })
})

