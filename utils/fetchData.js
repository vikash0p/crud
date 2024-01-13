
export const fetchStudentdata = async () => {

    try {

        const res = await fetch('http://localhost:3000/api/student' || 'https://crud-vikash0p.vercel.app/api/student' , {
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

        const res = await fetch(`http://localhost:3000/api/student/${id}` ||`https://crud-vikash0p.vercel.app/api/student/${id}`, {
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