import React from 'react'

const Location = () => {
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure className="p-0 pb-2">
                <iframe className="focus-visible:outline-none" src="https://api.mapy.cz/frame?params=%7B%22x%22%3A15.054170026394882%2C%22y%22%3A50.76778056490436%2C%22base%22%3A%2227%22%2C%22layers%22%3A%5B%5D%2C%22zoom%22%3A17%2C%22url%22%3A%22https%3A%2F%2Fmapy.cz%2Fs%2F1ZGzY%22%2C%22mark%22%3A%7B%22x%22%3A%2215.054170026394882%22%2C%22y%22%3A%2250.76778056490436%22%2C%22title%22%3A%22INTERIERY%20DESIGN%2C%20s.r.o.%22%7D%2C%22overview%22%3Atrue%7D&amp;width=400&amp;height=315&amp;lang=cs" width="400" height="315" frameborder="0"></iframe>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Kde se nacházíme</h2>
                <p>
                    Barvířská  č.31/ 8 – 1.patro <br />
                    Liberec 3 <br />
                    460 07 <br />
                    tel.  :  485 102 179,   fax. :  482 710 412
                </p>
            </div>
        </div>
    )
}

export default Location