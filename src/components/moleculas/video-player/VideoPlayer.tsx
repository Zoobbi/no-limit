import React, { FC } from "react";

import { ComponentPadding } from "@Basket/components/atoms/component-padding";
import { SectionHeader } from "@Basket/components/atoms/section-header";
import { Col, Container, Row } from "@Basket/components/atoms/grid";
import { SubscribeButton } from "@Basket/components/moleculas/subscribe-button";
import { UniversalWrapper } from "@Basket/components/atoms/universal-wrapper";

import styles from "./VideoPlayer.module.scss";

interface YouTubePlayerProps {
  videoId: string;
  headerText?: string
  channelId?: string
}

const YouTubePlayer: FC<YouTubePlayerProps> = ({ videoId,headerText, channelId  }) => {
  return (
    <ComponentPadding as="section" additionalStyles="whiteBg">
      <Container >
        <Row>
          {headerText &&
            (<Col>
              <SectionHeader headerText={headerText} isTextCenter />
            </Col>)
          }
          <Col additionalStyles="flex-center-center">
            <iframe
              className={styles.iFrame}
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>

          {channelId && (
            <Col additionalStyles="flex-center-center">
              <UniversalWrapper mb={32} mt={32}>
                <SubscribeButton channelId={channelId} />
              </UniversalWrapper>
            </Col>
          )}
        </Row>
      </Container>
    </ComponentPadding>
  );
};

export default YouTubePlayer;
