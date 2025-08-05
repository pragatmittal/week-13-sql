import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://postgres:wJmNFkhjiFCokRYntJGzFsxIPiSiGUjc@tramway.proxy.rlwy.net:57634/railway");
    await client.connect();
    return client;
}