//React& Redux
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpCart, productsCount } from "@redux/cart/slices/cartSlice";
import { cleanUpAddresses } from "@redux/address/slices/AddressesSlice";

//APiS
import { getProductsCartApiCall } from "@redux/cart/apicalls/cartApiCall";
import { getAddressesApiCall } from "@redux/address/apiCalls/getAddressesApiCall";

//Types
import type { TAddress } from "@customeTypes/address";

//components
import AddressForm from "@components/address/AddressForm";
import CheckoutInfo from "@components/checkout/CheckoutInfo";
import PriceInfo from "@components/checkout/PriceInfo";
import { Navigate } from "react-router-dom";

export default function Checkout() {
  const dispatch = useAppDispatch();

  const [addAddress, setAddAddress] = useState(false);
  const productsLength = useAppSelector(productsCount);

  const [addressForUpdate, setAddressForUpdate] = useState<TAddress | null>(
    null
  );

  const handleCloseForm = useCallback(() => {
    setAddressForUpdate(null);
    setAddAddress(false);
  }, []);
  const handleOpenForm = useCallback(() => setAddAddress(true), []);

  useEffect(() => {
    dispatch(getProductsCartApiCall());
    dispatch(getAddressesApiCall());

    return () => {
      dispatch(cleanUpAddresses());
      dispatch(cleanUpCart());
    };
  }, [dispatch]);
  if (!productsLength) return <Navigate to={"/"} />;
  return (
    <>
      <section className=" mx-auto my-6 ">
        <div className="flex container  lg:gap-8 gap-4 flex-col lg:flex-row">
          <CheckoutInfo handleOpenForm={handleOpenForm} />
          <PriceInfo />
        </div>
        {addAddress ? (
          <div className="mt-10">
            <AddressForm
              handleCloseForm={handleCloseForm}
              addressForUpdate={addressForUpdate}
            />
          </div>
        ) : null}
      </section>
    </>
  );
}
