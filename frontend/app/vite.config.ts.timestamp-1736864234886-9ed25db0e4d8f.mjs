// vite.config.ts
import { defineConfig } from "file:///mnt/c/Users/John%20Ombuya/Desktop/m-treat_frontend_technical_assessment/frontend/app/node_modules/.deno/vite@6.0.7/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/John%20Ombuya/Desktop/m-treat_frontend_technical_assessment/frontend/app/node_modules/.deno/@vitejs+plugin-react@4.3.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
import deno from "file:///mnt/c/Users/John%20Ombuya/Desktop/m-treat_frontend_technical_assessment/frontend/app/node_modules/.deno/@deno+vite-plugin@1.0.2/node_modules/@deno/vite-plugin/dist/index.js";
import path from "node:path";
import tailwindcss from "file:///mnt/c/Users/John%20Ombuya/Desktop/m-treat_frontend_technical_assessment/frontend/app/node_modules/.deno/tailwindcss@3.4.17/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///mnt/c/Users/John%20Ombuya/Desktop/m-treat_frontend_technical_assessment/frontend/app/node_modules/.deno/autoprefixer@10.4.20/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_dirname = "/mnt/c/Users/John Ombuya/Desktop/m-treat_frontend_technical_assessment/frontend/app";
var vite_config_default = defineConfig({
  plugins: [react(), deno()],
  resolve: {
    alias: {
      // Aliases for cleaner imports
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  css: {
    postcss: {
      plugins: [
        // Add PostCSS plugins here
        tailwindcss(),
        autoprefixer()
      ]
    }
  },
  server: {
    // Useful for local development
    port: 3e3,
    open: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlUm9vdCI6ICIvbW50L2MvVXNlcnMvSm9obiBPbWJ1eWEvRGVza3RvcC9tLXRyZWF0X2Zyb250ZW5kX3RlY2huaWNhbF9hc3Nlc3NtZW50L2Zyb250ZW5kL2FwcC8iLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvYy9Vc2Vycy9Kb2huIE9tYnV5YS9EZXNrdG9wL20tdHJlYXRfZnJvbnRlbmRfdGVjaG5pY2FsX2Fzc2Vzc21lbnQvZnJvbnRlbmQvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2MvVXNlcnMvSm9obiBPbWJ1eWEvRGVza3RvcC9tLXRyZWF0X2Zyb250ZW5kX3RlY2huaWNhbF9hc3Nlc3NtZW50L2Zyb250ZW5kL2FwcC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2MvVXNlcnMvSm9obiUyME9tYnV5YS9EZXNrdG9wL20tdHJlYXRfZnJvbnRlbmRfdGVjaG5pY2FsX2Fzc2Vzc21lbnQvZnJvbnRlbmQvYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGRlbm8gZnJvbSAnQGRlbm8vdml0ZS1wbHVnaW4nO1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW3JlYWN0KCksIGRlbm8oKV0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgLy8gQWxpYXNlcyBmb3IgY2xlYW5lciBpbXBvcnRzXG4gICAgICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAvLyBBZGQgUG9zdENTUyBwbHVnaW5zIGhlcmVcbiAgICAgICAgICAgICAgICB0YWlsd2luZGNzcygpLFxuICAgICAgICAgICAgICAgIGF1dG9wcmVmaXhlcigpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgICAvLyBVc2VmdWwgZm9yIGxvY2FsIGRldmVsb3BtZW50XG4gICAgICAgIHBvcnQ6IDMwMDAsXG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNmEsU0FBUyxvQkFBb0I7QUFDMWMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFVBQVU7QUFDakIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7QUFMekIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFBQSxFQUN6QixTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUE7QUFBQSxNQUVILEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN4QztBQUFBLEVBQ0o7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNELFNBQVM7QUFBQSxNQUNMLFNBQVM7QUFBQTtBQUFBLFFBRUwsWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLE1BQ2pCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRUosTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1Y7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
