import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import Roomvo from "../components/Roomvo"

//
import "../scss/PhotoBank.scss"



function PhotoBank() {


  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <PhotoBankSidebar />
        <div className="photo-bank-container">
          <h1>CPF Photo Bank</h1>
        </div>
      </Suspense>
      <Roomvo />
    </>
  );
}
export default PhotoBank;



