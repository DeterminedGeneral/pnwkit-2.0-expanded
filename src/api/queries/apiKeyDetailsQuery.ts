import { Kit } from '../..';
import { apiKeyDetails } from '../../interfaces/queries/apiKeyDetails';
import GraphQL from '../../services/GraphQL';

/**
 * Gets the details of the api key
 * @param {string} query The graphql query to get info with
 * @return {Promise<apiKeyDetails>}
 */
export default async function apiKeyDetailsQuery(
    this: Kit,
    query: string,
    apiKey?: string,
): Promise<apiKeyDetails> {
    const res = await GraphQL.makeCall(`
    {
      me {
        ${query}
      }
    }
  `, apiKey ?? this.apiKey);

    this.setRateLimit(res.rateLimit);

    return res.data.me as apiKeyDetails;
}
