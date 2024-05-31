import NavBar from "@/src/components/NavBar"

export default function TruyenqqLayout({children}: {children: React.ReactNode}) {
  return <div className = "w-screen h-screen">
    <NavBar />
    {children}
  </div>
}