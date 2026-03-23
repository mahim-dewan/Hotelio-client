import { useAuth } from "@/context/AuthProvider";
import { TOGGLE_AUTH_BOX } from "@/reducers/auth/actions";

const useBooking = () => {
  const { state, dispatch } = useAuth();
  const { user } = state;

  const handleReserve = async (payload) => {
    if (!user) {
      dispatch(TOGGLE_AUTH_BOX());
    }
    console.log(payload);
  };

  return { handleReserve };
};

export default useBooking;
