import React, { useState, useEffect } from "react"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import Fab from "@material-ui/core/Fab"
import CloseIcon from "@material-ui/icons/Close"

import ProjectModalContent from "../components/ProjectModalContent"
import { useSnackbar } from "notistack"
import initVl from "../utils/init-vl"
import initFaders from "../utils/init-faders"
import initProjectsCollapse from "../utils/init-projects-collapse"
import getAllProjects from "../projects"

export const ModalContext = React.createContext()

export default function Projects() {
  const [modal, setModal] = useState({
    images: [],
    imageIndex: 0,
    linksComponent: null,
    open: false,
  })

  const handleModal = (images, imageIndex, linksComponent) => {
    setModal({
      images: images,
      imageIndex: imageIndex,
      linksComponent: linksComponent,
      open: true,
    })
  }

  const handleClose = () => {
    setModal({ ...modal, open: false })
  }

  const [projectsViewing, setProjectsViewing] = useState(3)

  const projects = getAllProjects()

  const { enqueueSnackbar } = useSnackbar()

  return (
    <div id="projects">
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={modal.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <React.Fragment>
          <ProjectModalContent modal={modal} setModal={setModal} />
        </React.Fragment>
      </Modal>

      <Container>
        <h1 className="text-center fade-in">
          <span className="emoji-shake">
            <span role="img" aria-label="emoji" className="hover-shake">
              🚀
            </span>
          </span>{" "}
          PERSONAL PROJECTS{" "}
          <span className="emoji-shake">
            <span role="img" aria-label="emoji" className="hover-shake">
              🌕
            </span>
          </span>
        </h1>
        <hr />
        <br />
        <ModalContext.Provider value={handleModal}>
          {projects.map((Component, i) => {
            return <div className={i < projectsViewing ? "" : "hidden"}><Component key={i} /></div>
          })}
        </ModalContext.Provider>
        <div className="mobile-center">
          {projects.length > projectsViewing ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setProjectsViewing(projectsViewing + 2)}
            >
              <h6>See More Projects</h6>
            </Button>
          ) : (
            <Button variant="contained" onClick={() => setProjectsViewing(3)}>
              <h6>Collapse Projects</h6>
            </Button>
          )}
        </div>
        <div id="projects-fab" className="hidden">
          {projectsViewing > 3 && (
            <Fab
              size="large"
              variant="extended"
              color="primary"
              onClick={() => {
                setProjectsViewing(3)
                enqueueSnackbar("Collapsed!", { variant: "success" })
              }}
            >
              <CloseIcon style={{ marginRight: "5px" }} />
              <h6>Collapse Projects</h6>
            </Fab>
          )}
        </div>
      </Container>
    </div>
  )
}
