const Page = () =>  {

    const handleForm = async (FormData) => {
        "use server"
        console.log(FormData)
        const response = FormData.get("username")
        console.log("hola hola", response)
    }

    return (
        <div>
            <form action={handleForm}>
                <input type="text" name="username" />
                <button>Send</button>
            </form>
        </div>
    )
};

export default Page;