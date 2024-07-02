import { useState } from "react";
import { storage } from "../config/config";
import {ref, uploadBytes ,getDownloadURL} from "firebase/storage"
export default function UpLoadimage() {
    const [image, setImage] = useState<any>("")
    // khi người dùng chọn ảnh thì dùng sự kiện onchange
    const changeImage=(event:React.ChangeEvent<HTMLInputElement>)=>{
        // lấy giá trị của ảnh người dùng đã chọn
        let valueImage:any = event.target.files?.[0];
        // console.log(1111,valueImage);
        // lưu lại giá trị người dùng chọn
        setImage(valueImage);
    }
    const uploadImage=()=>{
        // nơi tiến hành xử lí để upload lại
        const imageRef = ref(storage, `ptit-image/${image.name}`)
        uploadBytes(imageRef, image).then((snapShop)=>{
            getDownloadURL(snapShop.ref).then((url)=>{
                console.log("1111",url);              
            })
        })
    }
  return (
    <div>UpLoadimage
        <br/>
        <input onChange={changeImage} type="file" />
        <button onClick={uploadImage}>upload</button>
    </div>
  )
}
/* 
    Tạo components product
      + ô input nhập tên sản phẩm
      + ô input để chọn ảnh
      + button nhấn thêm sản phẩm
      + sau khi thêm sản phẩm thì sản phẩm vào db.json  
    Tạo file db.json
      + 1 bảng: product
 */