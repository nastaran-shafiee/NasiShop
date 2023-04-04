import Button from "../../../components/button";
import SelectBox from "../../../components/selectBox";
import { useDispatch, useSelector } from "react-redux";
import {
  createData,
  createData2,
  updateData,
  updateData2,
} from "../../../redux/fetchAction";
import { MEN_URL, WOMEN_URL } from "../../../api/endpoint";
import { useEffect, useState } from "react";
import {
  addMen,
  addWomen,
  editMen,
  editWoman,
} from "../../../redux/fetchSlice";
import { FetchSliceData } from "../../../types/interface";
import Cookies from "js-cookie";
import { instance } from "../../../api/contants";
// setting function----------------------------------------------------------------------------------------------
function Setting() {
  const [women1, setWomen1] = useState<string | null>(null);
  const [women2, setWomen2] = useState<string | null>(null);
  const [women3, setWomen3] = useState<string | null>(null);
  const [women4, setWomen4] = useState<string | null>(null);
  const [men1, setMen1] = useState<string | null>(null);
  const [men2, setMen2] = useState<string | null>(null);
  const [men3, setMen3] = useState<string | null>(null);
  const [men4, setMen4] = useState<string | null>(null);

  const dispatch = useDispatch();
  const womanCategory = useSelector(
    (state: FetchSliceData) => state.fetchSlice.womanCategory
  );

  // for woman---------------------------------------------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(WOMEN_URL);
        const data = response.data;
        if (data) {
          setWomen1(data.women1);
          setWomen2(data.women2);
          setWomen3(data.women3);
          setWomen4(data.women4);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function womanChange() {
    const data1 = {
      women1: women1,
      women2: women2,
      women3: women3,
      women4: women4,
      id: Date.now(),
    };

    Cookies.set("womenData", JSON.stringify(data1));

    // Check if data exists on server
    instance.get(WOMEN_URL).then((response) => {
      const womanData = response.data;

      if (womanData.length > 0) {
        // Update the data
        instance
          .patch(`${WOMEN_URL}/${womanData[0].id}`, data1)
          .then((response) => {
            dispatch(editWoman(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // Post the data
        instance
          .post(WOMEN_URL, data1)
          .then((response) => {
            dispatch(addWomen(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
  // for men0--------------------------------------------------------------------------------------
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get(MEN_URL);
        const data = response.data;
        if (data) {
          setMen1(data.women1);
          setMen2(data.women2);
          setMen3(data.women3);
          setMen4(data.women4);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function menChange() {
    const data1 = {
      men1: men1,
      men2: men2,
      men3: men3,
      men4: men4,
      id: Date.now(),
    };

    // Check if data exists on server
    instance.get(MEN_URL).then((response) => {
      const menData = response.data;

      if (menData.length > 0) {
        // Update the data
        instance
          .patch(`${MEN_URL}/${menData[0].id}`, data1)
          .then((response) => {
            dispatch(editMen(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // Post the data
        instance
          .post(MEN_URL, data1)
          .then((response) => {
            dispatch(addMen(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
  return (
    <>
      <div className="flex flex-col items-center pt-8 gap-8">
        <div>صفحه ی اصلی سایت را بسازید</div>

        <div className="flex flex-col gap-4 w-[100%] ">
          <p className="pr-8">مردانه</p>
          <div className="flex flex-col items-center md:flex-row gap-2 justify-center ">
            <SelectBox
              className="bg-purple text-white"
              onChange={(e) => setMen1(e.target.value)}
            />
            <SelectBox
              className="bg-purple  text-white"
              onChange={(e) => setMen2(e.target.value)}
            />
            <SelectBox
              className="bg-purple  text-white"
              onChange={(e) => setMen3(e.target.value)}
            />
            <SelectBox
              className="bg-purple  text-white"
              onChange={(e) => setMen4(e.target.value)}
            />
            <Button title="ذخیره" onClick={menChange} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[100%]">
          <p className="pr-8">زنانه</p>
          <div className="flex flex-col items-center md:flex-row gap-2 justify-center">
            <SelectBox
              className="bg-purple  text-white"
              onChange={(e) => setWomen1(e.target.value)}
            />
            <SelectBox
              className="bg-purple  text-white"
              onChange={(e) => setWomen2(e.target.value)}
            />
            <SelectBox
              className="bg-purple  text-white"
              onChange={(e) => setWomen3(e.target.value)}
            />
            <SelectBox
              className="bg-purple  text-white"
              onChange={(e) => setWomen4(e.target.value)}
            />
            <Button title="ذخیره" onClick={womanChange} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Setting;
