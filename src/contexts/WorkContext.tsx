import { createContext, useContext, useState, type ReactNode } from "react"
import axios from "axios"
import type { Icontributor, Itechnology, Iwork, jsonData, technologyKeys } from "../types"

interface IworkContext {
  showOverlay: boolean
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>
  fetchData: (data: jsonData) => Promise<any>
  works: { categoryName: string, content: Iwork[] } | null
  setWorks: React.Dispatch<React.SetStateAction<{
    categoryName: string;
    content: Iwork[];
  } | null>>
  projectDetails: Iwork | null
  setProjectDetails: React.Dispatch<React.SetStateAction<Iwork | null>>
}

const WorkContext = createContext<IworkContext | null>(null);

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [works, setWorks] = useState<{ categoryName: string, content: Iwork[] } | null>(null)
  const [projectDetails, setProjectDetails] = useState<Iwork | null>(null);

  const fetchData = async (data: jsonData) => {
    try {
      const response = await axios.get(`./${data}.json`);
      return response.data;
    }
    catch (error) {
      console.error("Something went wrong", error);
    }
  }

  return (
    <WorkContext.Provider value={{ showOverlay, setShowOverlay, fetchData, works, setWorks, projectDetails, setProjectDetails }}>
      {children}
    </WorkContext.Provider>
  )
}

export const useWork = () => {
  const context = useContext(WorkContext);
  if (!context) {
    throw Error("useWork must be used within a WorkProvider");
  }
  return context;
}

export default WorkProvider