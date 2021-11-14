/*import React, { Fragment, useState, useEffect} from "react";

function data(){
    const [tienda, setTienda] = useState([])

    useEffect(() => {
        const gettienda = () =>{
            fetch("http://localhost:9000/api")
            .then(res => res.json())
            .then(res => setTienda(res))
        }
        gettienda()
    },[])

}

export default data;

/*status: "success",
items: [
    {
        id: "1",
        title: "BMW",
        price: 401,
        image: require("./Imagenes/assets/bmw.jpg"),
        category: "Auto",
        img1: "https://1.bp.blogspot.com/-4ggWXDJmwz4/W4GCzvyCvAI/AAAAAAACxzE/r442DhLZ-F4CizWuq4-2owXMspTur-UDACEwYBhgL/s1600/BMW-Serie-8-M850i-Coup%25C3%25A9-Autoblog-Uruguay-Precios-2018-2019-0km%2B%25282%2529.jpg",
        img2: "https://3.bp.blogspot.com/-GzxexXqTpQI/W9u0N4CL9gI/AAAAAAAC2jY/03OFHt-F_XYU16P8grnaUhvn4Ouq8Zv1QCLcBGAs/s1600/bmw-8-series-cabrio-Autoblog-Uruguay-Precios-0km-2019%2B%25282%2529.jpg",
        cantidad: 1,

    }, {



        id: 2,
        title: "audi",
        price: 350,
        image: require("./Imagenes/assets/bmw.jpg"),
        category: "Auto",
        img1: "https://1.bp.blogspot.com/-4ggWXDJmwz4/W4GCzvyCvAI/AAAAAAACxzE/r442DhLZ-F4CizWuq4-2owXMspTur-UDACEwYBhgL/s1600/BMW-Serie-8-M850i-Coup%25C3%25A9-Autoblog-Uruguay-Precios-2018-2019-0km%2B%25282%2529.jpg",
        img2: "https://3.bp.blogspot.com/-GzxexXqTpQI/W9u0N4CL9gI/AAAAAAAC2jY/03OFHt-F_XYU16P8grnaUhvn4Ouq8Zv1QCLcBGAs/s1600/bmw-8-series-cabrio-Autoblog-Uruguay-Precios-0km-2019%2B%25282%2529.jpg",
        cantidad: 1,
    }
    , {



        id: 3,
        title: "audi",
        price: 350,
        image: require("./Imagenes/assets/bmw.jpg"),
        category: "Auto",
        img1: "https://1.bp.blogspot.com/-4ggWXDJmwz4/W4GCzvyCvAI/AAAAAAACxzE/r442DhLZ-F4CizWuq4-2owXMspTur-UDACEwYBhgL/s1600/BMW-Serie-8-M850i-Coup%25C3%25A9-Autoblog-Uruguay-Precios-2018-2019-0km%2B%25282%2529.jpg",
        img2: "https://3.bp.blogspot.com/-GzxexXqTpQI/W9u0N4CL9gI/AAAAAAAC2jY/03OFHt-F_XYU16P8grnaUhvn4Ouq8Zv1QCLcBGAs/s1600/bmw-8-series-cabrio-Autoblog-Uruguay-Precios-0km-2019%2B%25282%2529.jpg",
        cantidad: 1,
    }
    , {



        id: 4,
        title: "audi",
        price: 350,
        image: require("./Imagenes/assets/bmw.jpg"),
        category: "Auto",
        img1: "https://1.bp.blogspot.com/-4ggWXDJmwz4/W4GCzvyCvAI/AAAAAAACxzE/r442DhLZ-F4CizWuq4-2owXMspTur-UDACEwYBhgL/s1600/BMW-Serie-8-M850i-Coup%25C3%25A9-Autoblog-Uruguay-Precios-2018-2019-0km%2B%25282%2529.jpg",
        img2: "https://3.bp.blogspot.com/-GzxexXqTpQI/W9u0N4CL9gI/AAAAAAAC2jY/03OFHt-F_XYU16P8grnaUhvn4Ouq8Zv1QCLcBGAs/s1600/bmw-8-series-cabrio-Autoblog-Uruguay-Precios-0km-2019%2B%25282%2529.jpg",
        cantidad: 1,
    }
    , {



        id: 5,
        title: "audi",
        price: 350,
        image: require("./Imagenes/assets/bmw.jpg"),
        category: "Auto",
        img1: "https://1.bp.blogspot.com/-4ggWXDJmwz4/W4GCzvyCvAI/AAAAAAACxzE/r442DhLZ-F4CizWuq4-2owXMspTur-UDACEwYBhgL/s1600/BMW-Serie-8-M850i-Coup%25C3%25A9-Autoblog-Uruguay-Precios-2018-2019-0km%2B%25282%2529.jpg",
        img2: "https://3.bp.blogspot.com/-GzxexXqTpQI/W9u0N4CL9gI/AAAAAAAC2jY/03OFHt-F_XYU16P8grnaUhvn4Ouq8Zv1QCLcBGAs/s1600/bmw-8-series-cabrio-Autoblog-Uruguay-Precios-0km-2019%2B%25282%2529.jpg",
        cantidad: 1,
    }
    , {



        id: 6,
        title: "audi",
        price: 350,
        image: require("./Imagenes/assets/bmw.jpg"),
        category: "Auto",
        img1: "https://1.bp.blogspot.com/-4ggWXDJmwz4/W4GCzvyCvAI/AAAAAAACxzE/r442DhLZ-F4CizWuq4-2owXMspTur-UDACEwYBhgL/s1600/BMW-Serie-8-M850i-Coup%25C3%25A9-Autoblog-Uruguay-Precios-2018-2019-0km%2B%25282%2529.jpg",
        img2: "https://3.bp.blogspot.com/-GzxexXqTpQI/W9u0N4CL9gI/AAAAAAAC2jY/03OFHt-F_XYU16P8grnaUhvn4Ouq8Zv1QCLcBGAs/s1600/bmw-8-series-cabrio-Autoblog-Uruguay-Precios-0km-2019%2B%25282%2529.jpg",
        cantidad: 1,
    }

],*/
