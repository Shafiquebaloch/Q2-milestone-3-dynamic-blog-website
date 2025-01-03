import Link from 'next/link'
import { getBlogPosts } from '../../lib/BlogPosts'
import BlogPostCard from './components/BlogPostCard'
import { use } from 'react'

export default function Home() {
  const blogPosts = use(getBlogPosts())

  return (
    <div className="space-y-12">
      <section className="bg-blue-600 from-primary to-secondary text-white py-20 rounded-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to the World of Next.js!</h1>
            <p className="text-xl md:text-2xl mb-8">
              In this blog, we’ll dive deep into the power of Next.js, a popular React framework that is transforming the way developers build fast, scalable, and SEO-friendly web applications. Whether you’re a beginner or an experienced developer, this guide will walk you through everything you need to know to get started with Next.js and enhance your web development skills.Let’s explore the exciting features, benefits, and best practices of Next.js together!</p>
            <Link 
              href="/blog" 
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
            >
              Explore Our Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-blue-600 text-3xl font-bold text-heading">Latest AI Insights with Next JS</h2>
          <Link href="/blog" className="text-primary hover:text-secondary transition-colors text-blue-600">
            View all posts
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

