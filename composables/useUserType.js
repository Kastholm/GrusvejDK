import { ref } from "vue";

const userType = ref(
  typeof window !== "undefined" ? localStorage.getItem("userType") || "" : "",
);

export function useUserType() {
  function setUserType(type) {
    userType.value = type;
    if (typeof window !== "undefined") {
      localStorage.setItem("userType", type);
    }
  }
  return {
    userType,
    setUserType,
  };
}
