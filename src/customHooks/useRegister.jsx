 const useRegister = async (userDetails) => {
        return new Promise ((resolve) =>  {
            resolve({
                name:userDetails.firstName,
                message: "Registered successfully",

            });
        });
    };

export default useRegister;