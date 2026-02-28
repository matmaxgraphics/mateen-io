import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectDetail } from '@/components/project-detail';
import { getProjectBySlug, getRelatedProjects } from '@/lib/projects';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: ProjectPageProps): Promise<Metadata> {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.',
    };
  }

  return {
    title: `${project.title} - Nolan Rosser`,
    description: project.description,
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(params.slug);

  return (
    <>
      <Header />
      <main>
        <ProjectDetail project={project} relatedProjects={relatedProjects} />
      </main>
      <Footer />
    </>
  );
}
