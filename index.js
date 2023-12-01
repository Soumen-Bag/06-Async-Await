const getButter=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //console.log("got butter");
            resolve('get Butter');
        },2000);
    });
};

const getColdDrinks=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //console.log("got cold drink");
            resolve("get cold drink");
        },1000);
    });
};

const mainFunction=async()=>{
    try {
        const butter= await getButter();
        const drinks= await getColdDrinks();
        console.log(drinks);
        console.log(butter);
    } catch (error) {
        console.log(error);
    }
};

mainFunction();