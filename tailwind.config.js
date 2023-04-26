function guessProductionMode() {
  const argv = process.argv.join(' ').toLowerCase();
  const isProdEnv = process.env.NODE_ENV === 'production';
  return (
    isProdEnv ||
    [' build', ':build', 'ng b', '--prod'].some((command) =>
      argv.includes(command)
    )
  );
}

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/*.{html,ts,css,scss}', './libs/**/*.{html,ts,css,scss}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      title: ['Eczar', 'serif'],
      content: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
