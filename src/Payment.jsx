import React, { useState } from "react";
import mastercard from "./assets/mastercard.png";
import Shape from "./assets/Shape.png";
import ellipse from "./assets/Group 3.png";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    expiration: "",
    CVC: "",
  });

  const handleChange = () => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" h-[90vh]  flex items-center justify-center">
      <div className="border rounded-xl p-2 shadow-xl h-[90%]  w-[70%] flex  space-x-5">
        <div className=" w-[60%] pl-5">
          <div className="pb-5">
            <h1 className="font-semibold text-2xl mt-5 mb-2">
              Faisons le paiement
            </h1>
            <p className="text-[#575757] mr-2">
              Pour commencer votre abonnement, saisissez les détails de votre
              carte pour effectuer le paiement.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              {" "}
              <label id="name" className="">
                Nom du titulaire de la carte
              </label>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                placeholder="PAULINA CHIMAROKE"
                className=" w-[80%] border  py-2 px-2 outline-none rounded-md   bg-[#EEEEEE] "
              />
            </div>
            <div className="flex flex-col mb-4">
              <label id="number">Numéro de carte</label>
              <span className="relative flex items-center">
                <img src={mastercard} alt="mastercard" className="absolute" />
                <input
                  type="text"
                  id="number"
                  onChange={handleChange}
                  placeholder="9870 3456 7890 6473"
                  className=" w-[80%] border-b border-[#FC5A1A]  py-2 pl-16 outline-none rounded-md   bg-[#EEEEEE]  "
                />
              </span>
            </div>
            <div className="flex gap-16  ">
              <div className="mb-5 flex flex-col">
                <label id="Expiration" className="text-[#575757] py-1">
                  Expiration
                </label>
                <input
                  type="text"
                  id="Expiration"
                  placeholder="03/25"
                  className="bg-[#EEEEEE] py-2 pl-2 rounded outline-none mr-8"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label id="CVC" className="text-[#575757] py-1">
                  CVC
                </label>
                <input
                  type="text"
                  maxLength="3"
                  id="CVC"
                  className="bg-[#EEEEEE] py-2 max-w-36 pl-2 rounded "
                  placeholder="654"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="relative flex items-center ">
              <img src={Shape} alt="lock" className="absolute h-4 pl-5 " />
              <input
                type="submit"
                value="Pay for the order"
                className=" bg-[#febda3] text-white py-2 rounded w-[16vw] pl-5 "
              />
            </div>
          </form>
        </div>
        <div className=" rounded-lg relative px-4 w-[35%] flex  bg-[#FAFAFA]   ">
          <img src={ellipse} alt="ellipse" className="absolute top-0 " />
          <div className=" flex flex-col justify-between py-12  ">
            <div className="z-10 backdrop-blur">
              <p className="text-[#575757] font-bold text-lg ">Vous payez</p>
              <h1 className="text-5xl font-bold pl-12 mb-5">$49.00</h1>
              <div className="flex  justify-between items-center ">
                <p className="text-lg font-bold w-[70%]">
                  Management qualité et amélioration continue
                </p>
                <p className="text-md font-medium">$ 400.00</p>
              </div>
              <p className="text-sm text-[#575757] p-2 ">Version 2017</p>
            </div>
            <div className=" px-10">
              <hr className=" bg-[#747474] " />
              <div className="flex justify-between items-center my-5">
                <p>Tax</p>
                <p>$ 0.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Total</p>
                <p>$ 49.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
