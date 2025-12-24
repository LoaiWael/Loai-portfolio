import { createContext, useContext, useState, type ReactNode } from "react"
import type { Iwork } from "../types"

interface IworkContext {
  showOverlay: boolean
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>
  projects: { categoryName: string, content: Iwork[] } | null
  setProjects: React.Dispatch<React.SetStateAction<{
    categoryName: string;
    content: Iwork[];
  } | null>>
  projectDetails: Iwork | null
  setProjectDetails: React.Dispatch<React.SetStateAction<Iwork | null>>
}

const WorkContext = createContext<IworkContext | null>(null);

const WorkProvider = ({ children }: { children: ReactNode }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [projects, setProjects] = useState<{ categoryName: string, content: Iwork[] } | null>(null)
  const [projectDetails, setProjectDetails] = useState<Iwork | null>(null);

  return (
    <WorkContext.Provider value={{ showOverlay, setShowOverlay, projects, setProjects, projectDetails, setProjectDetails }}>
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