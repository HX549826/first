import './index.less';

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="eyebrow">Umi 4</p>
        <h1>当前项目已完成 Umi 4 初始化</h1>
        <p className="description">
          运行 <code>pnpm install</code> 安装依赖后，使用 <code>pnpm dev</code> 启动开发服务。
        </p>
      </section>
    </main>
  );
}
