import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseCookies } from "../../../components/cookie";
import { useForm } from "react-hook-form";
import service from "../../../../backend/models/service";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import BarLoader from "react-spinners/BarLoader";

export const registation = () => {
  const [form, setform] = useState(false);
  const [sub_service, setsub_service] = useState("");
  const [loading, setloading] = useState(false)
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  async function apply(values) {
    const data = parseCookies();
    if (data.user) {
      console.log(values);
      setsub_service(values);
      setform(true);
    } else {
      alert("Please Login First");
    }
  }

  async function onSubmitForm(values) {
    if (
      values.adharfile[0].type != "application/pdf" ||
      values.pdfno1file[0].type != "application/pdf" ||
      values.pdfno2file[0].type != "application/pdf" ||
      values.pdfno3file[0].type != "application/pdf"
    ) {
      return alert("Please upload in pdf format");
    } else {
      if (values.adharfile[0].size > 100000) {
        return alert(
          values.adharfile[0].name + " " + "size is greater than 100kb"
        );
      }
      if (values.pdfno1file[0].size > 100000) {
        return alert(
          values.pdfno1file[0].name + " " + "size is greater than 100kb"
        );
      }
      if (values.pdfno2file[0].size > 100000) {
        return alert(
          values.pdfno2file[0].name + " " + "size is greater than 100kb"
        );
      }
      if (values.pdfno3file[0].size > 100000) {
        return alert(
          values.pdfno3file[0].name + " " + "size is greater than 100kb"
        );
      }
      setloading(true);
      const data = parseCookies();
      if (data.user && Object.keys(sub_service).length != 0) {
        let buff_dec = new Buffer.from(data.user, "base64");
        let xyz = buff_dec.toString("ascii");
        var email = xyz;
        if (email) {
          email = email.replace(/"/g, "");
          console.log(values.adharfile[0]);
          const filedata = values.adharfile[0];
          const pdffileno1 = values.pdfno1file[0];
          const pdffileno2 = values.pdfno2file[0];
          const pdffileno3 = values.pdfno3file[0];
          console.log(values.pdfno2file[0]);
          let formdata = new FormData();
          formdata.append("file", filedata);
          formdata.append("file", pdffileno1);
          formdata.append("file", pdffileno2);
          formdata.append("file", pdffileno3);
          formdata.append("email", email);
          formdata.append("service", "registration");
          formdata.append("subservice", sub_service);
          const res = await axios.post(
            "http://localhost:5000/service/apply",
            formdata
          );
          if (res.data.applied == "already_applied") {
            setloading(false);
            alert("Already applied for this service...");
            return window.location.reload()
          } else {
            setloading(false);
            alert(
              "Wait for 1-2 weeks for verification for your files, we will mail you once it verified"
            );
            return window.location.reload()
          }
        }
      } else {
        alert("Please Login first");
      }
    }
  }

  return (
    <div className="h-full min-h-screen w-full pt-14 px-10">
      {loading == true && (
        <div className=" flex justify-center fixed z-20 pt-5 -mx-10 min-h-screen w-500 min-w-full">
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-80 w-256 h-128">
          <BarLoader color="#000000" height={4} width={100} />
        </div>
        </div>
      )}
      {form == true && (
        <div className="bg-black bg-opacity-80 flex justify-center fixed z-10 pt-5 -mx-10 min-h-screen w-500 min-w-full">
          <div className="bg-white h-128 w-256">
            <form
              onSubmit={handleSubmit(onSubmitForm)}
              className="flex flex-col"
            >
              <div className="flex justify-between pt-4">
                <span className="flex invisible hover:cursor-pointer"></span>
                <span className="text-4xl space-x-1.5">
                  <span className="text-indigo-600">Verification</span>
                  <span>Form</span>
                </span>
                <span
                  className="flex px-1 -my-3 hover:cursor-pointer"
                  onClick={() => setform(false)}
                >
                  <HighlightOffOutlinedIcon />
                </span>
              </div>
              <div className="flex flex-col items-center mt-10">
                <span>*All files are necessary and must be in pdf format.</span>
                <span>*Maximum size allowed is 100KB</span>
              </div>
              <div className="grid grid-cols-2 px-10 mt-14 gap-y-6 justify-items-center">
                <div className="flex flex-col space-y-2">
                  <label className="text-blue-600 font-medium flex space-x-1">
                    <span>*Adhar Card </span>
                    <div className="group text-black flex">
                    <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
                    <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
                  </div>
                  </label>
                  <input
                    type="file"
                    {...register("adharfile", {
                      // validations
                      required: true,
                    })}
                    name="adharfile"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  ></input>
                  
                </div>
                <div className="flex flex-col space-y-2">
                <label className="text-blue-600 font-medium flex space-x-1">
                    <span>*Pdf No. 1</span>
                    <div className="group text-black flex">
                    <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
                    <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
                  </div>
                  </label>

                  <input
                    type="file"
                    {...register("pdfno1file", {
                      // validations
                      required: true,
                    })}
                    name="pdfno1file"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                <label className="text-blue-600 font-medium flex space-x-1">
                    <span>*Pdf No. 2</span>
                    <div className="group text-black flex">
                    <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
                    <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
                  </div>
                  </label>

                  <input
                    type="file"
                    {...register("pdfno2file", {
                      // validations
                      required: true,
                    })}
                    name="pdfno2file"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                <label className="text-blue-600 font-medium flex space-x-1">
                    <span>*Pdf No. 3</span>
                    <div className="group text-black flex">
                    <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
                    <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
                  </div>
                  </label>
                  <input
                    type="file"
                    {...register("pdfno3file", {
                      // validations
                      required: true,
                    })}
                    name="pdfno3file"
                    className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  ></input>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 brightness-105 glow-blue-900-md hover:text-indigo-500 hover:bg-white hover:border hover:border-indigo-500 hover:scale-105 ease-in-out transform delay-150 mt-10 shadow-sm rounded-sm text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="bg-green grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-full w-full mt-20 gap-4 pb-10">
        <div className="flex flex-col justify-between bg-green-600 rounded-lg h-72  shadow-md">
          <span className="text-xl text-center pt-10 px-5 text-black">
            Busniess registration (LLP partnership proprietorship up Private
            Limited public limited)
          </span>
          <button
            onClick={() =>
              apply(
                "Busniess registration (LLP partnership proprietorship up Private Limited public limited)"
              )
            }
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-500 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            GST
          </span>
          <button
            onClick={() => apply("GST")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-400 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            e-PAN card
          </span>
          <button
            onClick={() => apply("e-PAN card")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-300 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            Trademark registration
          </span>
          <button
            onClick={() => apply("Trademark registration")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-300 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            Fssai (food) licence and registration
          </span>
          <button
            onClick={() => apply("Fssai (food) licence and registration")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-400 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            Shop act licence
          </span>
          <button
            onClick={() => apply("Shop act licence")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-500 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            Udemy msme registration
          </span>
          <button
            onClick={() => apply("Udemy msme registration")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-600 rounded-lg h-72  shadow-md">
          <span className="text-xl text-center pt-10 px-5 text-black">
            DSC certificate
          </span>
          <button
            onClick={() => apply("DSC certificate")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-600 rounded-lg h-72  shadow-md">
          <span className="text-xl text-center pt-10 px-5 text-black">
            import export code
          </span>
          <button
            onClick={() => apply("import export code")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-500 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            Barcode
          </span>
          <button
            onClick={() => apply("Barcode")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-400 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            apeda registration
          </span>
          <button
            onClick={() => apply("apeda registration")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-300 rounded-lg h-72  shadow-md">
          <span className="text-2xl text-center pt-10 px-5 text-black">
            Spices Board registration
          </span>
          <button
            onClick={() => apply("Spices Board registration")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
        <div className="flex flex-col justify-between bg-green-600 rounded-lg h-72  shadow-md">
          <span className="text-xl text-center pt-10 px-5 text-black">
            ISO certification
          </span>
          <button
            onClick={() => apply("ISO certification")}
            className="bg-green-100 text-gray-800 bg-opacity-60 shadow-xl py-4"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default registation;


{data.map((data) => (
  <div className="bg-white " key={data.name}>
    {data.name == sub_service && (
      <div className=" ">
        <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col w-256 " 
      >
        <div className="flex justify-between pt-4 ">
          <span className="flex invisible hover:cursor-pointer"></span>
          <span className="text-4xl space-x-1.5">
            <span className="text-indigo-600">Verification</span>
            <span>Form</span>
          </span>
          <span
            className="flex px-1 -my-3 hover:cursor-pointer"
            onClick={() => setform(false)}
          >
            <HighlightOffOutlinedIcon />
          </span>
        </div>
        <div className="flex flex-col items-center mt-10">
          <span>*All files are necessary and must be in pdf format.</span>
          <span>*Maximum size allowed is 100KB</span>
        </div>
        <div className="grid grid-cols-2 px-10 mt-14 gap-y-6 justify-items-center">
        {data.identity_proof.map((idp) => (
          <div className="flex flex-col space-y-2">
            <label className="text-blue-600 font-medium flex space-x-1">
              <span>*{idp}</span>
              <div className="group text-black flex">
              <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
              <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
            </div>
            </label>
            <input
              type="file"
              {...register(`${idp}`, {
                // validations
                required: true,
              })}
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            ></input>
            
          </div>
           ))}
          {/* <div className="flex flex-col space-y-2">
          <label className="text-blue-600 font-medium flex space-x-1">
              <span>*Pdf No. 1</span>
              <div className="group text-black flex">
              <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
              <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
            </div>
            </label>

            <input
              type="file"
              {...register("pdfno1file", {
                // validations
                required: true,
              })}
              name="pdfno1file"
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
          <label className="text-blue-600 font-medium flex space-x-1">
              <span>*Pdf No. 2</span>
              <div className="group text-black flex">
              <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
              <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
            </div>
            </label>

            <input
              type="file"
              {...register("pdfno2file", {
                // validations
                required: true,
              })}
              name="pdfno2file"
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            ></input>
          </div>
          <div className="flex flex-col space-y-2">
          <label className="text-blue-600 font-medium flex space-x-1">
              <span>*Pdf No. 3</span>
              <div className="group text-black flex">
              <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
              <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
            </div>
            </label>
            <input
              type="file"
              {...register("pdfno3file", {
                // validations
                required: true,
              })}
              name="pdfno3file"
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            ></input>
          </div>*/}
        </div> 
        <div className="grid grid-cols-2 px-10 mt-14 gap-y-6 justify-items-center">
        {data.identity_proof.map((idp) => (
          <div className="flex flex-col space-y-2">
            <label className="text-blue-600 font-medium flex space-x-1">
              <span>*{idp}</span>
              <div className="group text-black flex">
              <span className=""><LiveHelpOutlinedIcon fontSize = "small" color = "secondary" /></span>
              <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">About the file that will be uploaded</span>
            </div>
            </label>
            <input
              type="file"
              {...register(`${idp}`, {
                // validations
                required: true,
              })}
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            ></input>
            
          </div>
           ))}
           </div>
           
        <div className="flex justify-center ">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 brightness-105 glow-blue-900-md hover:text-indigo-500 hover:bg-white hover:border hover:border-indigo-500 hover:scale-105 ease-in-out transform delay-150 mt-10 shadow-sm rounded-sm text-white"
          >
            Submit
          </button>
        </div>
      </form>
     
    </div>
    )}
  </div>
  ))}












  <div className="grid grid-cols-2 px-10 mt-14 gap-y-6 justify-items-center">
                    {data.address_proof.map((adp) => (
                      <div className="flex flex-col space-y-2">
                        <label className="text-blue-600 font-medium flex space-x-1">
                          <span>*{adp}</span>
                          <div className="group text-black flex">
                            <span className="">
                              <LiveHelpOutlinedIcon
                                fontSize="small"
                                color="secondary"
                              />
                            </span>
                            <span className="hidden group-hover:flex fixed bg-gray-400 h-20 m-4 w-40 text-center justify-center items-center text-white font-light  bg-opacity-50 text-xs">
                              About the file that will be uploaded
                            </span>
                          </div>
                        </label>
                        <input
                          type="file"
                          {...register(`${adp}`, {
                            // validations
                            required: true,
                          })}
                          className="form-control
                                     block
                                     w-full
                                     px-3
                                     py-1.5
                                     text-base
                                     font-normal
                                     text-gray-700
                                     bg-white bg-clip-padding
                                     border border-solid border-gray-300
                                     rounded
                                     transition
                                     ease-in-out
                                     m-0
                                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        ></input>
                      </div>
                    ))}
                  </div>