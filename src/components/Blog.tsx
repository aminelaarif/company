import { motion } from "framer-motion";

const posts = [
  {
    title: "The Future of Web3 Integration",
    excerpt: "Exploring how blockchain technology is revolutionizing website development and user interactions in 2024",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    date: "2024-03-15",
    author: "Alex Chen",
    readTime: "5 min read"
  },
  {
    title: "AI-Driven Design Systems",
    excerpt: "How artificial intelligence is transforming the way we approach web design and user experience",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    date: "2024-03-10",
    author: "Sarah Johnson",
    readTime: "4 min read"
  },
  {
    title: "Next-Generation UX Trends",
    excerpt: "Breaking down the latest innovations in user interface design and interactive experiences",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    date: "2024-03-05",
    author: "Marcus Zhang",
    readTime: "6 min read"
  },
  {
    title: "The Rise of Motion Design",
    excerpt: "Creating immersive web experiences through advanced animation and interaction",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "2024-03-01",
    author: "Emma Wilson",
    readTime: "3 min read"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 relative overflow-hidden bg-gaming-dark">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent opacity-50"
      />

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-glow"
        >
          Latest Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="overflow-hidden rounded-lg">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="p-6 bg-black/50 backdrop-blur-sm border border-neon-blue/20 rounded-b-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <motion.time
                    whileHover={{ scale: 1.1 }}
                    className="text-neon-blue text-sm animate-pulse"
                  >
                    {post.date}
                  </motion.time>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-xl font-semibold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300"
                >
                  {post.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="text-gray-400 mb-4"
                >
                  {post.excerpt}
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <span className="text-neon-purple text-sm animate-pulse">By {post.author}</span>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-2 border-neon-blue/0 group-hover:border-neon-blue/50 transition-colors duration-300 rounded-lg animate-pulse-border"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;