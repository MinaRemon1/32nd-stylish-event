
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NationalFaculty
 * 
 */
export type NationalFaculty = $Result.DefaultSelection<Prisma.$NationalFacultyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more NationalFaculties
 * const nationalFaculties = await prisma.nationalFaculty.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more NationalFaculties
   * const nationalFaculties = await prisma.nationalFaculty.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.nationalFaculty`: Exposes CRUD operations for the **NationalFaculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NationalFaculties
    * const nationalFaculties = await prisma.nationalFaculty.findMany()
    * ```
    */
  get nationalFaculty(): Prisma.NationalFacultyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    NationalFaculty: 'NationalFaculty'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "nationalFaculty"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NationalFaculty: {
        payload: Prisma.$NationalFacultyPayload<ExtArgs>
        fields: Prisma.NationalFacultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NationalFacultyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NationalFacultyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>
          }
          findFirst: {
            args: Prisma.NationalFacultyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NationalFacultyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>
          }
          findMany: {
            args: Prisma.NationalFacultyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>[]
          }
          create: {
            args: Prisma.NationalFacultyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>
          }
          createMany: {
            args: Prisma.NationalFacultyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NationalFacultyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>[]
          }
          delete: {
            args: Prisma.NationalFacultyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>
          }
          update: {
            args: Prisma.NationalFacultyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>
          }
          deleteMany: {
            args: Prisma.NationalFacultyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NationalFacultyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NationalFacultyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>[]
          }
          upsert: {
            args: Prisma.NationalFacultyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NationalFacultyPayload>
          }
          aggregate: {
            args: Prisma.NationalFacultyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNationalFaculty>
          }
          groupBy: {
            args: Prisma.NationalFacultyGroupByArgs<ExtArgs>
            result: $Utils.Optional<NationalFacultyGroupByOutputType>[]
          }
          count: {
            args: Prisma.NationalFacultyCountArgs<ExtArgs>
            result: $Utils.Optional<NationalFacultyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    nationalFaculty?: NationalFacultyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model NationalFaculty
   */

  export type AggregateNationalFaculty = {
    _count: NationalFacultyCountAggregateOutputType | null
    _avg: NationalFacultyAvgAggregateOutputType | null
    _sum: NationalFacultySumAggregateOutputType | null
    _min: NationalFacultyMinAggregateOutputType | null
    _max: NationalFacultyMaxAggregateOutputType | null
  }

  export type NationalFacultyAvgAggregateOutputType = {
    id: number | null
  }

  export type NationalFacultySumAggregateOutputType = {
    id: number | null
  }

  export type NationalFacultyMinAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    title: string | null
    photo: string | null
    createdAt: Date | null
  }

  export type NationalFacultyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    title: string | null
    photo: string | null
    createdAt: Date | null
  }

  export type NationalFacultyCountAggregateOutputType = {
    id: number
    name: number
    country: number
    title: number
    photo: number
    createdAt: number
    _all: number
  }


  export type NationalFacultyAvgAggregateInputType = {
    id?: true
  }

  export type NationalFacultySumAggregateInputType = {
    id?: true
  }

  export type NationalFacultyMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    title?: true
    photo?: true
    createdAt?: true
  }

  export type NationalFacultyMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    title?: true
    photo?: true
    createdAt?: true
  }

  export type NationalFacultyCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    title?: true
    photo?: true
    createdAt?: true
    _all?: true
  }

  export type NationalFacultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NationalFaculty to aggregate.
     */
    where?: NationalFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NationalFaculties to fetch.
     */
    orderBy?: NationalFacultyOrderByWithRelationInput | NationalFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NationalFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NationalFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NationalFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NationalFaculties
    **/
    _count?: true | NationalFacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NationalFacultyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NationalFacultySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NationalFacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NationalFacultyMaxAggregateInputType
  }

  export type GetNationalFacultyAggregateType<T extends NationalFacultyAggregateArgs> = {
        [P in keyof T & keyof AggregateNationalFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNationalFaculty[P]>
      : GetScalarType<T[P], AggregateNationalFaculty[P]>
  }




  export type NationalFacultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NationalFacultyWhereInput
    orderBy?: NationalFacultyOrderByWithAggregationInput | NationalFacultyOrderByWithAggregationInput[]
    by: NationalFacultyScalarFieldEnum[] | NationalFacultyScalarFieldEnum
    having?: NationalFacultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NationalFacultyCountAggregateInputType | true
    _avg?: NationalFacultyAvgAggregateInputType
    _sum?: NationalFacultySumAggregateInputType
    _min?: NationalFacultyMinAggregateInputType
    _max?: NationalFacultyMaxAggregateInputType
  }

  export type NationalFacultyGroupByOutputType = {
    id: number
    name: string
    country: string | null
    title: string | null
    photo: string
    createdAt: Date
    _count: NationalFacultyCountAggregateOutputType | null
    _avg: NationalFacultyAvgAggregateOutputType | null
    _sum: NationalFacultySumAggregateOutputType | null
    _min: NationalFacultyMinAggregateOutputType | null
    _max: NationalFacultyMaxAggregateOutputType | null
  }

  type GetNationalFacultyGroupByPayload<T extends NationalFacultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NationalFacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NationalFacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NationalFacultyGroupByOutputType[P]>
            : GetScalarType<T[P], NationalFacultyGroupByOutputType[P]>
        }
      >
    >


  export type NationalFacultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    title?: boolean
    photo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["nationalFaculty"]>

  export type NationalFacultySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    title?: boolean
    photo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["nationalFaculty"]>

  export type NationalFacultySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    title?: boolean
    photo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["nationalFaculty"]>

  export type NationalFacultySelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    title?: boolean
    photo?: boolean
    createdAt?: boolean
  }

  export type NationalFacultyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "title" | "photo" | "createdAt", ExtArgs["result"]["nationalFaculty"]>

  export type $NationalFacultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NationalFaculty"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      country: string | null
      title: string | null
      photo: string
      createdAt: Date
    }, ExtArgs["result"]["nationalFaculty"]>
    composites: {}
  }

  type NationalFacultyGetPayload<S extends boolean | null | undefined | NationalFacultyDefaultArgs> = $Result.GetResult<Prisma.$NationalFacultyPayload, S>

  type NationalFacultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NationalFacultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NationalFacultyCountAggregateInputType | true
    }

  export interface NationalFacultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NationalFaculty'], meta: { name: 'NationalFaculty' } }
    /**
     * Find zero or one NationalFaculty that matches the filter.
     * @param {NationalFacultyFindUniqueArgs} args - Arguments to find a NationalFaculty
     * @example
     * // Get one NationalFaculty
     * const nationalFaculty = await prisma.nationalFaculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NationalFacultyFindUniqueArgs>(args: SelectSubset<T, NationalFacultyFindUniqueArgs<ExtArgs>>): Prisma__NationalFacultyClient<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NationalFaculty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NationalFacultyFindUniqueOrThrowArgs} args - Arguments to find a NationalFaculty
     * @example
     * // Get one NationalFaculty
     * const nationalFaculty = await prisma.nationalFaculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NationalFacultyFindUniqueOrThrowArgs>(args: SelectSubset<T, NationalFacultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NationalFacultyClient<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NationalFaculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NationalFacultyFindFirstArgs} args - Arguments to find a NationalFaculty
     * @example
     * // Get one NationalFaculty
     * const nationalFaculty = await prisma.nationalFaculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NationalFacultyFindFirstArgs>(args?: SelectSubset<T, NationalFacultyFindFirstArgs<ExtArgs>>): Prisma__NationalFacultyClient<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NationalFaculty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NationalFacultyFindFirstOrThrowArgs} args - Arguments to find a NationalFaculty
     * @example
     * // Get one NationalFaculty
     * const nationalFaculty = await prisma.nationalFaculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NationalFacultyFindFirstOrThrowArgs>(args?: SelectSubset<T, NationalFacultyFindFirstOrThrowArgs<ExtArgs>>): Prisma__NationalFacultyClient<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NationalFaculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NationalFacultyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NationalFaculties
     * const nationalFaculties = await prisma.nationalFaculty.findMany()
     * 
     * // Get first 10 NationalFaculties
     * const nationalFaculties = await prisma.nationalFaculty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nationalFacultyWithIdOnly = await prisma.nationalFaculty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NationalFacultyFindManyArgs>(args?: SelectSubset<T, NationalFacultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NationalFaculty.
     * @param {NationalFacultyCreateArgs} args - Arguments to create a NationalFaculty.
     * @example
     * // Create one NationalFaculty
     * const NationalFaculty = await prisma.nationalFaculty.create({
     *   data: {
     *     // ... data to create a NationalFaculty
     *   }
     * })
     * 
     */
    create<T extends NationalFacultyCreateArgs>(args: SelectSubset<T, NationalFacultyCreateArgs<ExtArgs>>): Prisma__NationalFacultyClient<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NationalFaculties.
     * @param {NationalFacultyCreateManyArgs} args - Arguments to create many NationalFaculties.
     * @example
     * // Create many NationalFaculties
     * const nationalFaculty = await prisma.nationalFaculty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NationalFacultyCreateManyArgs>(args?: SelectSubset<T, NationalFacultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NationalFaculties and returns the data saved in the database.
     * @param {NationalFacultyCreateManyAndReturnArgs} args - Arguments to create many NationalFaculties.
     * @example
     * // Create many NationalFaculties
     * const nationalFaculty = await prisma.nationalFaculty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NationalFaculties and only return the `id`
     * const nationalFacultyWithIdOnly = await prisma.nationalFaculty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NationalFacultyCreateManyAndReturnArgs>(args?: SelectSubset<T, NationalFacultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NationalFaculty.
     * @param {NationalFacultyDeleteArgs} args - Arguments to delete one NationalFaculty.
     * @example
     * // Delete one NationalFaculty
     * const NationalFaculty = await prisma.nationalFaculty.delete({
     *   where: {
     *     // ... filter to delete one NationalFaculty
     *   }
     * })
     * 
     */
    delete<T extends NationalFacultyDeleteArgs>(args: SelectSubset<T, NationalFacultyDeleteArgs<ExtArgs>>): Prisma__NationalFacultyClient<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NationalFaculty.
     * @param {NationalFacultyUpdateArgs} args - Arguments to update one NationalFaculty.
     * @example
     * // Update one NationalFaculty
     * const nationalFaculty = await prisma.nationalFaculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NationalFacultyUpdateArgs>(args: SelectSubset<T, NationalFacultyUpdateArgs<ExtArgs>>): Prisma__NationalFacultyClient<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NationalFaculties.
     * @param {NationalFacultyDeleteManyArgs} args - Arguments to filter NationalFaculties to delete.
     * @example
     * // Delete a few NationalFaculties
     * const { count } = await prisma.nationalFaculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NationalFacultyDeleteManyArgs>(args?: SelectSubset<T, NationalFacultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NationalFaculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NationalFacultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NationalFaculties
     * const nationalFaculty = await prisma.nationalFaculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NationalFacultyUpdateManyArgs>(args: SelectSubset<T, NationalFacultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NationalFaculties and returns the data updated in the database.
     * @param {NationalFacultyUpdateManyAndReturnArgs} args - Arguments to update many NationalFaculties.
     * @example
     * // Update many NationalFaculties
     * const nationalFaculty = await prisma.nationalFaculty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NationalFaculties and only return the `id`
     * const nationalFacultyWithIdOnly = await prisma.nationalFaculty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NationalFacultyUpdateManyAndReturnArgs>(args: SelectSubset<T, NationalFacultyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NationalFaculty.
     * @param {NationalFacultyUpsertArgs} args - Arguments to update or create a NationalFaculty.
     * @example
     * // Update or create a NationalFaculty
     * const nationalFaculty = await prisma.nationalFaculty.upsert({
     *   create: {
     *     // ... data to create a NationalFaculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NationalFaculty we want to update
     *   }
     * })
     */
    upsert<T extends NationalFacultyUpsertArgs>(args: SelectSubset<T, NationalFacultyUpsertArgs<ExtArgs>>): Prisma__NationalFacultyClient<$Result.GetResult<Prisma.$NationalFacultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NationalFaculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NationalFacultyCountArgs} args - Arguments to filter NationalFaculties to count.
     * @example
     * // Count the number of NationalFaculties
     * const count = await prisma.nationalFaculty.count({
     *   where: {
     *     // ... the filter for the NationalFaculties we want to count
     *   }
     * })
    **/
    count<T extends NationalFacultyCountArgs>(
      args?: Subset<T, NationalFacultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NationalFacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NationalFaculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NationalFacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NationalFacultyAggregateArgs>(args: Subset<T, NationalFacultyAggregateArgs>): Prisma.PrismaPromise<GetNationalFacultyAggregateType<T>>

    /**
     * Group by NationalFaculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NationalFacultyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NationalFacultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NationalFacultyGroupByArgs['orderBy'] }
        : { orderBy?: NationalFacultyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NationalFacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNationalFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NationalFaculty model
   */
  readonly fields: NationalFacultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NationalFaculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NationalFacultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NationalFaculty model
   */
  interface NationalFacultyFieldRefs {
    readonly id: FieldRef<"NationalFaculty", 'Int'>
    readonly name: FieldRef<"NationalFaculty", 'String'>
    readonly country: FieldRef<"NationalFaculty", 'String'>
    readonly title: FieldRef<"NationalFaculty", 'String'>
    readonly photo: FieldRef<"NationalFaculty", 'String'>
    readonly createdAt: FieldRef<"NationalFaculty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NationalFaculty findUnique
   */
  export type NationalFacultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * Filter, which NationalFaculty to fetch.
     */
    where: NationalFacultyWhereUniqueInput
  }

  /**
   * NationalFaculty findUniqueOrThrow
   */
  export type NationalFacultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * Filter, which NationalFaculty to fetch.
     */
    where: NationalFacultyWhereUniqueInput
  }

  /**
   * NationalFaculty findFirst
   */
  export type NationalFacultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * Filter, which NationalFaculty to fetch.
     */
    where?: NationalFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NationalFaculties to fetch.
     */
    orderBy?: NationalFacultyOrderByWithRelationInput | NationalFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NationalFaculties.
     */
    cursor?: NationalFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NationalFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NationalFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NationalFaculties.
     */
    distinct?: NationalFacultyScalarFieldEnum | NationalFacultyScalarFieldEnum[]
  }

  /**
   * NationalFaculty findFirstOrThrow
   */
  export type NationalFacultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * Filter, which NationalFaculty to fetch.
     */
    where?: NationalFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NationalFaculties to fetch.
     */
    orderBy?: NationalFacultyOrderByWithRelationInput | NationalFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NationalFaculties.
     */
    cursor?: NationalFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NationalFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NationalFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NationalFaculties.
     */
    distinct?: NationalFacultyScalarFieldEnum | NationalFacultyScalarFieldEnum[]
  }

  /**
   * NationalFaculty findMany
   */
  export type NationalFacultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * Filter, which NationalFaculties to fetch.
     */
    where?: NationalFacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NationalFaculties to fetch.
     */
    orderBy?: NationalFacultyOrderByWithRelationInput | NationalFacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NationalFaculties.
     */
    cursor?: NationalFacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NationalFaculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NationalFaculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NationalFaculties.
     */
    distinct?: NationalFacultyScalarFieldEnum | NationalFacultyScalarFieldEnum[]
  }

  /**
   * NationalFaculty create
   */
  export type NationalFacultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * The data needed to create a NationalFaculty.
     */
    data: XOR<NationalFacultyCreateInput, NationalFacultyUncheckedCreateInput>
  }

  /**
   * NationalFaculty createMany
   */
  export type NationalFacultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NationalFaculties.
     */
    data: NationalFacultyCreateManyInput | NationalFacultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NationalFaculty createManyAndReturn
   */
  export type NationalFacultyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * The data used to create many NationalFaculties.
     */
    data: NationalFacultyCreateManyInput | NationalFacultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NationalFaculty update
   */
  export type NationalFacultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * The data needed to update a NationalFaculty.
     */
    data: XOR<NationalFacultyUpdateInput, NationalFacultyUncheckedUpdateInput>
    /**
     * Choose, which NationalFaculty to update.
     */
    where: NationalFacultyWhereUniqueInput
  }

  /**
   * NationalFaculty updateMany
   */
  export type NationalFacultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NationalFaculties.
     */
    data: XOR<NationalFacultyUpdateManyMutationInput, NationalFacultyUncheckedUpdateManyInput>
    /**
     * Filter which NationalFaculties to update
     */
    where?: NationalFacultyWhereInput
    /**
     * Limit how many NationalFaculties to update.
     */
    limit?: number
  }

  /**
   * NationalFaculty updateManyAndReturn
   */
  export type NationalFacultyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * The data used to update NationalFaculties.
     */
    data: XOR<NationalFacultyUpdateManyMutationInput, NationalFacultyUncheckedUpdateManyInput>
    /**
     * Filter which NationalFaculties to update
     */
    where?: NationalFacultyWhereInput
    /**
     * Limit how many NationalFaculties to update.
     */
    limit?: number
  }

  /**
   * NationalFaculty upsert
   */
  export type NationalFacultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * The filter to search for the NationalFaculty to update in case it exists.
     */
    where: NationalFacultyWhereUniqueInput
    /**
     * In case the NationalFaculty found by the `where` argument doesn't exist, create a new NationalFaculty with this data.
     */
    create: XOR<NationalFacultyCreateInput, NationalFacultyUncheckedCreateInput>
    /**
     * In case the NationalFaculty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NationalFacultyUpdateInput, NationalFacultyUncheckedUpdateInput>
  }

  /**
   * NationalFaculty delete
   */
  export type NationalFacultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
    /**
     * Filter which NationalFaculty to delete.
     */
    where: NationalFacultyWhereUniqueInput
  }

  /**
   * NationalFaculty deleteMany
   */
  export type NationalFacultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NationalFaculties to delete
     */
    where?: NationalFacultyWhereInput
    /**
     * Limit how many NationalFaculties to delete.
     */
    limit?: number
  }

  /**
   * NationalFaculty without action
   */
  export type NationalFacultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NationalFaculty
     */
    select?: NationalFacultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NationalFaculty
     */
    omit?: NationalFacultyOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NationalFacultyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    title: 'title',
    photo: 'photo',
    createdAt: 'createdAt'
  };

  export type NationalFacultyScalarFieldEnum = (typeof NationalFacultyScalarFieldEnum)[keyof typeof NationalFacultyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NationalFacultyWhereInput = {
    AND?: NationalFacultyWhereInput | NationalFacultyWhereInput[]
    OR?: NationalFacultyWhereInput[]
    NOT?: NationalFacultyWhereInput | NationalFacultyWhereInput[]
    id?: IntFilter<"NationalFaculty"> | number
    name?: StringFilter<"NationalFaculty"> | string
    country?: StringNullableFilter<"NationalFaculty"> | string | null
    title?: StringNullableFilter<"NationalFaculty"> | string | null
    photo?: StringFilter<"NationalFaculty"> | string
    createdAt?: DateTimeFilter<"NationalFaculty"> | Date | string
  }

  export type NationalFacultyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type NationalFacultyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NationalFacultyWhereInput | NationalFacultyWhereInput[]
    OR?: NationalFacultyWhereInput[]
    NOT?: NationalFacultyWhereInput | NationalFacultyWhereInput[]
    name?: StringFilter<"NationalFaculty"> | string
    country?: StringNullableFilter<"NationalFaculty"> | string | null
    title?: StringNullableFilter<"NationalFaculty"> | string | null
    photo?: StringFilter<"NationalFaculty"> | string
    createdAt?: DateTimeFilter<"NationalFaculty"> | Date | string
  }, "id">

  export type NationalFacultyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
    _count?: NationalFacultyCountOrderByAggregateInput
    _avg?: NationalFacultyAvgOrderByAggregateInput
    _max?: NationalFacultyMaxOrderByAggregateInput
    _min?: NationalFacultyMinOrderByAggregateInput
    _sum?: NationalFacultySumOrderByAggregateInput
  }

  export type NationalFacultyScalarWhereWithAggregatesInput = {
    AND?: NationalFacultyScalarWhereWithAggregatesInput | NationalFacultyScalarWhereWithAggregatesInput[]
    OR?: NationalFacultyScalarWhereWithAggregatesInput[]
    NOT?: NationalFacultyScalarWhereWithAggregatesInput | NationalFacultyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NationalFaculty"> | number
    name?: StringWithAggregatesFilter<"NationalFaculty"> | string
    country?: StringNullableWithAggregatesFilter<"NationalFaculty"> | string | null
    title?: StringNullableWithAggregatesFilter<"NationalFaculty"> | string | null
    photo?: StringWithAggregatesFilter<"NationalFaculty"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NationalFaculty"> | Date | string
  }

  export type NationalFacultyCreateInput = {
    name: string
    country?: string | null
    title?: string | null
    photo: string
    createdAt?: Date | string
  }

  export type NationalFacultyUncheckedCreateInput = {
    id?: number
    name: string
    country?: string | null
    title?: string | null
    photo: string
    createdAt?: Date | string
  }

  export type NationalFacultyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NationalFacultyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NationalFacultyCreateManyInput = {
    id?: number
    name: string
    country?: string | null
    title?: string | null
    photo: string
    createdAt?: Date | string
  }

  export type NationalFacultyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NationalFacultyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NationalFacultyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type NationalFacultyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NationalFacultyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type NationalFacultyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type NationalFacultySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}