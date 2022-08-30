import { Doc } from '@root/layout/Doc'
import Releases from '@root/layout/Releases'

const SliderReleases = () => (
  <Releases
    packageSlug="slider"
    packageLabel="Slider"
  />
)

const DocLayout = (props: any) => {
  return (
    <Doc
      {...props}
      githubUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/slider/releases.tsx`}
      metaTitle="Slider Releases - Faceless UI"
      metaDescription="Version releases for the Slider package."
    />
  )
};

SliderReleases.Layout = DocLayout;

export default SliderReleases;
