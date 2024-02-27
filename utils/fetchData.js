
export const fetchStudentdata = async () => {

    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/student`  , {
            cache: 'no-cache'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        console.log(error);

    }

}

export const getStudentById = async (id) => {


    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/student/${id}` , {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        console.log(error);

    }

}