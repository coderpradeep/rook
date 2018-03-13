import { it, describe } from 'mocha';
import { expect } from 'chai';
import URI from 'urijs';
import { getExploreUrlAndPayload, getExploreLongUrl } from '../../../javascripts/explore/exploreUtils';

describe('utils', () => {
  const location = window.location;
  const formData = {
    datasource: '1__table',
  };
  const sFormData = JSON.stringify(formData);
  function compareURI(uri1, uri2) {
    expect(uri1.toString()).to.equal(uri2.toString());
  }

  describe('getExploreUrlAndPayload', () => {
    it('generates proper base url', () => {
      // This assertion is to show clearly the value of location.href
      // in the context of unit tests.
      expect(location.href).to.equal('about:blank');

      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'base',
        force: false,
        curUrl: 'http://kato.com',
      });
      compareURI(
        URI(url),
        URI('/kato/explore/'),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generates proper json url', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: false,
        curUrl: 'http://kato.com',
      });
      compareURI(
        URI(url),
        URI('/kato/explore_json/'),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generates proper json forced url', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: true,
        curUrl: 'kato.com',
      });
      compareURI(
        URI(url),
        URI('/kato/explore_json/')
          .search({ force: 'true' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generates proper csv URL', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'csv',
        force: false,
        curUrl: 'kato.com',
      });
      compareURI(
        URI(url),
        URI('/kato/explore_json/')
          .search({ csv: 'true' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generates proper standalone URL', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'standalone',
        force: false,
        curUrl: 'kato.com',
      });
      compareURI(
        URI(url),
        URI('/kato/explore/')
          .search({ standalone: 'true' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('preserves main URLs params', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: false,
        curUrl: 'kato.com?foo=bar',
      });
      compareURI(
        URI(url),
        URI('/kato/explore_json/')
          .search({ foo: 'bar' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generate proper save slice url', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: false,
        curUrl: 'kato.com?foo=bar',
      });
      compareURI(
        URI(url),
        URI('/kato/explore_json/')
          .search({ foo: 'bar' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generate proper saveas slice url', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: false,
        curUrl: 'kato.com?foo=bar',
      });
      compareURI(
        URI(url),
        URI('/kato/explore_json/')
          .search({ foo: 'bar' }),
      );
      expect(payload).to.deep.equals(formData);
    });
  });

  describe('getExploreLongUrl', () => {
    it('generates proper base url with form_data', () => {
      compareURI(
        URI(getExploreLongUrl(formData, 'base')),
        URI('/kato/explore/').search({ form_data: sFormData }),
      );
    });
  });
});
