import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  {CreateRoom}  from "./pages/create-room.tsx";
import {Room}  from "./pages/room.tsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />}  path="/room/:id" />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}