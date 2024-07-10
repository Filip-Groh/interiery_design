"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function useClientMediaQuery(query) {
    const [matches, setMatches] = React.useState(null)
  
    React.useEffect(() => {
      const mediaQueryList = window.matchMedia(query)
  
      const handleMatchChange = (e) => {
        setMatches(e.matches)
      }
  
      mediaQueryList.addEventListener('change', handleMatchChange)
      setMatches(mediaQueryList.matches)
  
      return () => {
        mediaQueryList.removeEventListener('change', handleMatchChange)
      }
    }, [query])
  
    return matches
}

const DisplayImage = ({src, alt, width, height, classes="max-w-sm rounded-lg", isScaling=true, isOpenable=true}) => {
    const isMobile = useClientMediaQuery('(max-width: 600px)')

    const handleOpen = () => {
        if (isOpenable) {
            if (!isMobile) {
                document.getElementById(src).showModal()
            }
        }
    }

    return (
        <>
            <Image className={`${classes} shadow-2xl cursor-pointer ${isScaling? "hover:scale-[110%] sm:hover:scale-[150%] transition-transform" : ""}`} onClick={handleOpen} width={width} height={height} src={src} alt={alt} />
            <dialog id={src} className="modal">
                <div className="modal-box max-w-[90vw] max-h-[90vh] flex justify-center align-middle">
                    <Link href={src} className='focus:outline-none' target='_blank'>
                        <Image className="rounded-lg shadow-2xl max-h-full max-w-full object-contain block" width={2000} height={0} src={src} alt={alt} />
                    </Link>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1 bg-base-200 caret-transparent text-neutral">✕</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop h-screen">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default DisplayImage