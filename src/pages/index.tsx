import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import InfoModal from '@/components/InfoModal';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TicketContainer from '@/components/TicketContainer';

import { useAppSelector } from '@/store/store-hooks';

export default function HomePage() {
  const infoModalStatus = useAppSelector(
    (state) => state.global.isInfoModalOpen
  );
  return (
    <Layout>
      <Seo />
      <main>
        <TicketContainer />
        {infoModalStatus && <InfoModal />}
      </main>
      <Toaster />
    </Layout>
  );
}
