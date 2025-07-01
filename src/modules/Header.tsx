import { Button } from "antd"
import { useState } from "react"
import CustomModal from "../components/CustomModal"

const Header = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    function handleOnClick() {
        setOpenModal(!openModal)
    }
  return (
    <header className="px-15 py-5 bg-gray-500 fixed top-0 w-full z-50 border-b-2 border-orange-600">
        <div className="flex items-center justify-between">
            <h2 className="text-[25px] text-white font-semibold">Products</h2>
            <Button onClick={handleOnClick} size="large" className="!text-[20px] !bg-white !text-orange-600">Get Info</Button>
            <CustomModal />
        </div>
    </header>
  )
}

export default Header