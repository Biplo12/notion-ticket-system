import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TicketContainer from '@/components/TicketContainer';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <TicketContainer />
      </main>
    </Layout>
  );
}
