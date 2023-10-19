// TODO: this should be somewhere more secure
const config = {
    resourceServerUrl: 'https://api.moneyhub.co.uk/v2.0',
    identityServiceUrl: 'https://identity.moneyhub.co.uk',
    accountConnectUrl: 'https://bank-chooser.moneyhub.co.uk/account-connect.js',
    client: {
        client_id: '6b50587e-b59b-48c0-a58f-eb2e7477129d',
        client_secret: 'd78e4dad-eea4-4f56-9b95-182f183d5ef5',
        token_endpoint_auth_method: 'client_secret_basic',
        id_token_signed_response_alg: 'none',
        request_object_signing_alg: 'none',
        redirect_uri: 'https://redirectmeto.com/http://localhost:5173',
        response_type: 'code',
        keys: [
            {
                'kty': 'RSA',
                'n': '0Yf8GTt9yaXn5Lboo5vE2rIA3pQk9apFXHHUaeH4vSiQiivzVJT8hLGrMRuvAAj0LGKAScG5woQYtfujnaiDMKArMUaNPFN-18u-QYkOtDB0XDy3IFriLT08ywNgoO4B78Zlt1g0CGI-1SvKHNdpA7za4XYms-zbLKxXwnSXT5S7jAAMTmU5LFMaRUtgTWqtcFxJFAETVycDxZ4hzwF3ZxNnklFkdLKGthpa7BvghNA6nF5evO0WkrYpJzTQ734wjQ2K0VtLF1I94pqmLNFPOofeGuAthNfEGir9ri1MbLeq0b8LQ9He5GHr1wdJUmKjQLW6znm5PSYDTLT3pu6M-Q',
                'e': 'AQAB',
                'd': 'jBoeMgz6bdPWO7Ml2Qf117mAJVPvZqiEmmyueGIVfP3br9f1a0_3jQ5zhnGZUS-rfOYcG7VCbVMAZuasn2Wm2uOuHdOr6nN18_sS6yUmxMtFcstSM3sxkshIlwJaISEkAFyrdK2wlQ6ELuuJyEEswcgMnwbumA4--x79y1NEPXvh0HaOjUvfR4LFQQgTK0GrWGHmupALplwQ3zprox2d7k8edev-W1PiAd3K2DRrc3pfnCo5K0wNZmqayTBG65pO7Lv90TJ8Z7MhYY4lx5oMd8RK1jYRUbxqBpbGu2PNFR-PQo37dkkSYCVlac9Pc5LUjEniYN52PRL0sb0W9aV2ZQ',
                'p': '_qoA7YFdMq3eNl9L9KTXRdxMQOYUInganQdacjZ9TDGI7Cvq7LVT73Sll5fWN56L_KKODZBqrOmzmFUd0pjwrKEssnLS_vpQSWFY0RCNHNKrG_iwmnjQbN5M5hRaGR1QKKj2w0eJYd31ksnzPN3Pfk-VUIM_M_1s74ef_c_wrfc',
                'q': '0qFe6p8Zd0-6AHj5L55t5VH1pKo52tDIuJTTZI2FL1z6yfrUb1nMzBd7ngdDEuP6QNjQRLW_RqKN_QtAvspDTszhpG7pVZr68zuzKJBpQf-7I-bEl_MUSzMNntLPYgRZXOMTJsi8jWYXoWiDIzpbrh2xO7MuX9z4M2lgVT6VoI8',
                'dp': 'pwgITb9AyqHBkvYUUqTf0aF5nkOKR0VxZzdQeoME0bnXrdfsYU9Ze0CN8A0V4yspdA2GkJz9auZp9ms1gVDw4rlgILcxby3tBQRFhfKOK659rn4CD39YbV-tHmeQ5NIWJmUUXOcJ09gKXzn4QR7XHmjCbal4Bfidv8m8BXSizuc',
                'dq': 'avS0nRFDPjnG6ryDVLHvfhY7VW13SWzhsBEqsxHGAsIFO5FaVFzWSQDXrexkG_CWQF2YjHt58KVU0pznOLq-qQISxovngqfbLK4xELUcLf5tChMB22L8-B6pmO_VjSFGO4u3Sud-D5M7BqRqivX0XhsHx5f6QYWUp46n80F_e3M',
                'qi': 'uEYuUeY0Tpj47Ptxo9JRkg3CaoV50PMjoymJ2GzEMRLsqUtt3KHBFmjPuFvskRB1uiBEXcXiV5hM0luOt6nNP5AKXDMRYRgd4NfavPU6mlwogZUG2frAyT-g8k0-2BbF0QB_HpXjaXBgPtGiL7SIvCgEkrjfaVYl2WarblCqL-k',
                'kid': 'FzxTO4bSeUfktKWS3J0mm4ZIwOoeklibz1BAASMqCqg',
                'use': 'sig',
                'alg': 'RS256'
            }
        ],
    },
}

module.exports = config;