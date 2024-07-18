"use client"

import React from 'react'

const SocialNetwork = ({defaultSocialNetwork}) => {
    const [twitter, setTwitter] = React.useState(defaultSocialNetwork.twitter)
    const [youtube, setYoutube] = React.useState(defaultSocialNetwork.youtube)
    const [facebook, setFacebook] = React.useState(defaultSocialNetwork.facebook)
    const [instagram, setInstagram] = React.useState(defaultSocialNetwork.instagram)
    const [tiktok, setTiktok] = React.useState(defaultSocialNetwork.tiktok)
    const [pinterest, setPinterest] = React.useState(defaultSocialNetwork.pinterest)

    React.useEffect(() => {
        async function getAllSocialNetwork() {
            const formData = new FormData()
            formData.set("key", "socialNetwork")
            const response = await fetch('/api/settings', {
                method: 'PUT',
                body: formData
            })

            const newSocialNetwork = await response.json()
            const defaultSocialNetwork = JSON.parse(newSocialNetwork?.value || '""')
            setTwitter(defaultSocialNetwork.twitter)
            setYoutube(defaultSocialNetwork.youtube)
            setFacebook(defaultSocialNetwork.facebook)
            setInstagram(defaultSocialNetwork.instagram)
            setTiktok(defaultSocialNetwork.tiktok)
            setPinterest(defaultSocialNetwork.pinterest) 
        }
        getAllSocialNetwork()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.set("key", "socialNetwork")
        formData.set("value", JSON.stringify({
            twitter: formData.get("twitter"),
            youtube: formData.get("youtube"),
            facebook: formData.get("facebook"),
            instagram: formData.get("instagram"),
            tiktok: formData.get("tiktok"),
            pinterest: formData.get("pinterest")
        }))
        const response = fetch('/api/settings', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-1 flex-shrink-0'>
            <input type="url" id="twitter" name="twitter" placeholder="Adresa twitter účtu" className="file-input file-input-bordered w-full" value={twitter} onChange={(e) => setTwitter(e.target.value)}/>
            <input type="url" id="youtube" name="youtube" placeholder="Adresa youtube účtu" className="file-input file-input-bordered w-full" value={youtube} onChange={(e) => setYoutube(e.target.value)}/>
            <input type="url" id="facebook" name="facebook" placeholder="Adresa facebook účtu" className="file-input file-input-bordered w-full" value={facebook} onChange={(e) => setFacebook(e.target.value)}/>
            <input type="url" id="instagram" name="instagram" placeholder="Adresa instagram účtu" className="file-input file-input-bordered w-full" value={instagram} onChange={(e) => setInstagram(e.target.value)}/>
            <input type="url" id="tiktok" name="tiktok" placeholder="Adresa tiktok účtu" className="file-input file-input-bordered w-full" value={tiktok} onChange={(e) => setTiktok(e.target.value)}/>

            <div className="flex flex-row">                
                <input type="url" id="pinterest" name="pinterest" placeholder="Adresa pinterest účtu" className="file-input file-input-bordered w-full" value={pinterest} onChange={(e) => setPinterest(e.target.value)}/>
                <input type="submit" value="Upravit" className="btn"/>
            </div>
        </form>
    )
}

export default SocialNetwork