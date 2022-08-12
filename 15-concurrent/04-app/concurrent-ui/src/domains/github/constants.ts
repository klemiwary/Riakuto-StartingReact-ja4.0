import camelcaseKeys from 'camelcase-keys';
import { Options, NormalizedOptions } from 'ky';

export const DEFAULT_KY_OPTIONS: Options = {
  prefixUrl: 'https://api.github.com',
  timeout: 4000,
  retry: 0,
  hooks: {
    afterResponse: [
      async (
        _request: Request,
        _options: NormalizedOptions,
        response: Response
      ): Promise<Response> => {
        const body = new Blob( // Camelize JSON keys
          [JSON.stringify(camelcaseKeys(await response.json()), null, 2)],
          { type: 'application/json' }
        );
        const { headers, status, statusText } = response;
        const init = { headers, status, statusText };

        return new Response(body, init);
      },
    ],
  },
};
