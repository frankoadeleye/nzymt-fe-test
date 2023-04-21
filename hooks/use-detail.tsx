import { useState } from "react";

/*____________________ HANDLE HIDE AND SHOW OF EACH ITEM'S ADDRESS ON ITEM CLICK _____________ */

function useDetail(array) {
  const [idOfCurrentItem, setidOfCurrentItem] = useState(1);
  const [isCurrentShowing, setCurrentShow] = useState(false);

  const showDetailsofClickedItem = (index) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === index + 1) {
        console.log(array);
        setidOfCurrentItem(array[i].id);
        setCurrentShow(true);
      }
      /*show the detail of the item I clicked if the item is not the currently opened item*/
      if (isCurrentShowing && array[i].id !== idOfCurrentItem) {
        setCurrentShow(true);
      }
    }
    /*hide the current item if it is opened*/
    if (isCurrentShowing && index + 1 === idOfCurrentItem) {
      setCurrentShow(false);
    }
  };

  return {
    idOfCurrentItem,
    isCurrentShowing,
    showDetailsofClickedItem,
  };
}

export default useDetail;
