import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Code2, Briefcase, FolderGit2, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/guicoutof/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)))
      .catch(console.error);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={darkMode ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={
          darkMode
            ? "bg-gray-950 text-white min-h-screen transition-colors duration-300"
            : "bg-gray-100 text-gray-900 min-h-screen transition-colors duration-300"
        }
      >
        {/* Header */}
        <header
          className={`flex justify-between items-center px-8 py-6 border-b ${
            darkMode ? "border-gray-800" : "border-gray-300"
          }`}
        >
          <h1 className="text-lg font-semibold">Guilherme Couto Fernandes</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 px-6">
          <motion.h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Desenvolvedor Full Stack
          </motion.h1>
          <p
            className={`text-lg max-w-2xl ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Criando soluções escaláveis com foco em arquitetura limpa, automação
            e performance. 🚀
          </p>
          <div className="flex gap-5 mt-6">
            <a
              href="https://github.com/guicoutof"
              target="_blank"
              rel="noopener"
              className="hover:text-cyan-400"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/guilherme-couto-fernandes-58aa2586/"
              target="_blank"
              rel="noopener"
              className="hover:text-cyan-400"
            >
              <FaLinkedin size={26} />
            </a>

            <a
              href="https://www.instagram.com/_guicouto/"
              target="_blank"
              rel="noopener"
              className="hover:text-cyan-400"
            >
              <FaInstagram size={26} />
            </a>

            <a
              href="mailto:gui_coutof@hotmail.com"
              className="hover:text-cyan-400"
            >
              <Mail size={26} />
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
            <Code2 /> Habilidades
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              "Node.js",
              "TypeScript",
              "React",
              "Express",
              "NestJS",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Clean Architecture",
              "Domain-Driven Design",
            ].map((skill) => (
              <motion.div
                key={skill}
                className={`${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } p-4 rounded-xl shadow hover:shadow-cyan-400/20 transition border ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-700"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
            <Briefcase /> Experiência Profissional
          </h2>
          <div className="space-y-6">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white border border-gray-200"
              } p-6 rounded-2xl transition-colors duration-300`}
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                Desenvolvedor Full Stack — Rubcube / Rubpay
              </h3>
              <p
                className={`text-sm mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                2021 — Atual
              </p>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Responsável pela implementação de microsserviços em Node.js,
                integração com APIs externas e arquitetura hexagonal com DDD.
                Liderança técnica de um time de 4 desenvolvedores.
              </p>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
            <FolderGit2 /> Projetos Recentes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <motion.a
                href={repo.html_url}
                target="_blank"
                key={repo.id}
                className={`${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white border border-gray-200 hover:bg-gray-50"
                } p-5 rounded-2xl transition flex flex-col justify-between transition-colors duration-300`}
                whileHover={{ scale: 1.03 }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                    {repo.name}
                  </h3>
                  <p
                    className={`text-sm mb-3 line-clamp-3 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {repo.description || "Sem descrição."}
                  </p>
                </div>
                <div
                  className={`flex items-center text-sm mt-2 ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  <Briefcase className="mr-2" size={16} />
                  {repo.language || "N/A"}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`text-center py-10 border-t text-sm ${
            darkMode
              ? "border-gray-800 text-gray-500"
              : "border-gray-300 text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} Guilherme Couto Fernandes — Feito com ❤️
          e React.
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
