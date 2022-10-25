/**
 * @interface SurrealConnectionOptions
 * @see https://github.com/necm1/surrealdb-driver/blob/main/src/interface/client-options.interface.ts
 */
export interface SurrealConnectionOptions {
  /**
   * Database RPC host url
   *
   * @type {string}
   */
   readonly host: string;

   /**
    * Database RPC host port
    *
    * @type {number}
    */
    readonly port: number;

   /**
    * Database RPC username
    *
    * @type {string}
    */
    readonly user: string;

   /**
    * Database RPC password
    *
    * @type {string}
    */
    readonly pass: string;

   /**
    * Database name
    *
    * @type {string}
    */
    readonly db: string;

   /**
    * Database namespace
    *
    * @type {string}
    */
    readonly ns: string;

   /**
    * @type {boolean}
    */
    readonly ssl: boolean;
}
