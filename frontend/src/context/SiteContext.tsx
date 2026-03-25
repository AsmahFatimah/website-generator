import React, { createContext, useContext } from 'react'
import type { Site } from '../types/Site';

export const SiteContext = createContext<Site | null>(null);
export const useSiteDetails = () =>{
    return useContext(SiteContext)
}