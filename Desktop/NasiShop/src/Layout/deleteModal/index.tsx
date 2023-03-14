import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { openDeleteModal } from "../../redux/fetchSlice";
import Button from "../../components/button";
import { deleteData } from "../../redux/fetchAction";
import { FetchSliceData } from "../../types/interface";

function DeleteMoadal() {
  const dispatch = useDispatch();

  // get value from input---------------------------------------------------=
  const id = useSelector((state: FetchSliceData) => state.fetchSlice.id);
  // close modal---------------------------------------------------------------
  function closeModal() {
    dispatch(openDeleteModal(false));
  }
  // mpdal root------------------------------------------------------------------
  const modalRoot = document.getElementById("modal") as HTMLElement;
  //   delete handel-------------------------------------------------------------
  function deletehandle() {
    dispatch(deleteData(id));
    dispatch(openDeleteModal(false));
  }
  // return----------------------------------------------------------------------
  return createPortal(
    <div className="w-full h-full bg-back absolute t-0 z-50 flex justify-center rounded-md mt-0 pt-8 items-center">
      <div className="w-[80%] h-[25%] bg-table flex flex-col items-center gap-4 md:w-[40%] ">
        <div className="flex justify-between w-[90%] pt-2 ">
          <Icon
            icon="mdi:close-circle"
            width="25"
            height="25"
            className="text-purple"
            onClick={closeModal}
          />
        </div>
        <p>آیا از پاک کردن محصول اطمینان دارید؟</p>
        <div className="flex gap-2">
          <Button
            title="پاک کردن"
            className="buttonwidth bg-red-600"
            onClick={deletehandle}
          />
        </div>
      </div>
    </div>,
    modalRoot
  );
}
export default DeleteMoadal;
