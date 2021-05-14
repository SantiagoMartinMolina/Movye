import Layout from '../components/Layout';
import Catalog from '../components/Catalog/index';

export default function Home() {
  // const [showMovie, setShowMovie] = useState({ show: false, movie: {} });
  return (
    <Layout>
      {/* <Modal peli={ } /> */}
      <Catalog set />
    </Layout>
  )
}
