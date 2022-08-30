import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const ModalReleases = () => (
  <Releases
    packageSlug="modal"
    packageLabel="Modal"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/modal/releases.tsx`}
      metaTitle="Modal Releases - Faceless UI"
      metaDescription="Version releases for the Modal package."
    />
  )
};

ModalReleases.Layout = DocLayout;

export default ModalReleases;
